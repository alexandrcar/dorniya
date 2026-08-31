document.addEventListener("DOMContentLoaded", async () => {
    
    // --- ГЕНЕРАТОР ПОЛЬЗОВАТЕЛЕЙ (ДЛЯ КОММЕНТАРИЕВ) ---
    const adjectives = ["Умный", "Дикий", "Сонный", "Хитрый", "Добрый", "Смелый", "Быстрый", "Мудрый", "Ловкий", "Грозный"];
    const animals = {
        "Волк": "🐺", "Кот": "🐈", "Лис": "🦊", "Медведь": "🐻", "Енот": "🦝", 
        "Орел": "🦅", "Тигр": "🐯", "Барсук": "🦡", "Заяц": "🐇", "Лев": "🦁"
    };

    function getUserIdentity() {
        let identity = localStorage.getItem('site_user_identity');
        if (identity) return JSON.parse(identity);

        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const animalKeys = Object.keys(animals);
        const animal = animalKeys[Math.floor(Math.random() * animalKeys.length)];
        const emoji = animals[animal];
        const tag = Math.floor(1000 + Math.random() * 9000);

        const newIdentity = {
            name: `${adj} ${animal} #${tag}`,
            avatar: emoji
        };
        
        localStorage.setItem('site_user_identity', JSON.stringify(newIdentity));
        return newIdentity;
    }

    const currentUser = getUserIdentity();

    // --- ПОДКЛЮЧЕНИЕ FIREBASE И AUTH ---
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js");
    const { getFirestore, collection, addDoc, setDoc, doc, onSnapshot, query, orderBy, serverTimestamp } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js");
    const { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js");

    const firebaseConfig = {
        apiKey: "AIzaSyDoP2ab59fFShUYnaITudhZDwjDUt0fvMs",
        authDomain: "nidorya.firebaseapp.com",
        projectId: "nidorya",
        storageBucket: "nidorya.firebasestorage.app",
        messagingSenderId: "124811329243",
        appId: "1:124811329243:web:1a24ad7b6e06002be356fe",
        measurementId: "G-EBKCSJVHPK"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    window.firebaseDb = db;

    // --- ЛОГИКА АВТОРИЗАЦИИ И ФИКСАЦИИ ПОЛЬЗОВАТЕЛЕЙ ---
    const overlay = document.getElementById("auth-modal-overlay");
    const loginBtn = document.getElementById("google-login-btn");

    // Отслеживание статуса авторизации
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // Если вошел — скрываем модальное окно
            if (overlay) overlay.style.display = "none";

            // 1. Берем ФИО из Google или начало почты
            const rawName = user.displayName || user.email.split('@')[0] || "unknown";
            
            // 2. Делаем имя безопасным (маленькие буквы, вместо пробелов - подчеркивание)
            const safeName = rawName.toLowerCase().replace(/\s+/g, '_');

            // 3. Получаем текущую дату в формате ГГГГ-ММ-ДД для правильной сортировки
            const date = new Date();
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const dateString = `${year}-${month}-${day}`; // Теперь год идет первым

            // 4. Формируем финальный ID (например: 2026-08-31_иван_иванов)
            const customDocId = `${dateString}_${safeName}`;

            // 5. Записываем в Firestore
            try {
                await setDoc(doc(db, "users", customDocId), {
                    uid: user.uid,
                    fullName: user.displayName || "Не указано",
                    email: user.email,
                    photoURL: user.photoURL,
                    anonymousAlias: currentUser.name, 
                    loginTime: serverTimestamp() 
                }, { merge: true });
                
            } catch (error) {
                console.error("Ошибка записи пользователя в базу:", error);
            }
        } else {
            // Если не вошел — показываем окно входа
            if (overlay) overlay.style.display = "flex";
        }
    });

    // Нажатие на кнопку входа через Google
    if (loginBtn) {
        loginBtn.addEventListener("click", async () => {
            try {
                await signInWithPopup(auth, provider);
            } catch (err) {
                console.error("Ошибка входа:", err);
                alert("Не удалось войти через Google. Попробуйте снова.");
            }
        });
    }

    // 2. Отрисовка семестров
    const semestersContainer = document.getElementById("semesters-container");
    semestersContainer.innerHTML = '<h2 class="section-title">Сборник программы ПМИ</h2>';

    const allSubjectIds = [];

    semestersData.forEach((semester) => {
        const semesterBlock = document.createElement("details");
        semesterBlock.classList.add("semester-block");
        
        let htmlContent = `
            <summary><h3>${semester.title}</h3></summary>
            <div class="subjects-grid">
        `;
        
        semester.subjects.forEach((subject) => {
            const profs = Array.isArray(subject.professor) ? subject.professor : [subject.professor];
            const profLabel = profs.length > 1 ? "Преподаватели:" : "Преподаватель:";
            const profNames = profs.join(", ");
            const getBtnHtml = (link, text) => link ? `<a href="${link}" target="_blank" class="disk-btn">${text}</a>` : `<span class="disk-btn disabled">${text}</span>`;
            const links = subject.diskLinks || {};
            
            const safeSubjectName = subject.name.replace(/[^a-zA-Zа-яА-ЯёЁ0-9]/g, '-').toLowerCase();
            const subjectId = `${semester.id}-${safeSubjectName}`; 
            
            allSubjectIds.push(subjectId);

            const attestationHtml = subject.attestation ? `
                <div class="attestation-block">
                    <span class="attestation-type">${subject.attestation}</span>
                </div>
            ` : "";

            htmlContent += `
                <div class="subject-card">
                    <h4>${subject.name}</h4>
                    <p class="professor"><strong>${profLabel}</strong> ${profNames}</p>
                    ${attestationHtml}
                    <p class="description">${subject.description}</p>
                    <div class="links-container">
                        ${getBtnHtml(links.lectures, "Лекции")}
                        ${getBtnHtml(links.seminars, "Семинары")}
                        ${getBtnHtml(links.kr, "Контрольные")}
                    </div>
                    
                    <div class="comments-wrapper">
                        <button class="toggle-comments-btn" data-target="${subjectId}">
                            <span class="btn-icon">💬</span>
                            <span class="btn-text" id="label-${subjectId}">Комментарии</span>
                            <span class="btn-count" id="count-${subjectId}">(0)</span>
                        </button>
                        
                        <div id="${subjectId}" class="comments-container" style="display: none;">
                            <div class="rules-banner">
                                ⚠️ Уважайте друг друга! Без мата, спама и оскорблений.
                            </div>
                            <div class="comments-list" id="list-${subjectId}">
                                <p class="empty-msg">Загрузка...</p>
                            </div>
                            <div class="add-comment-box">
                                <div class="my-avatar" title="Вы будете писать как ${currentUser.name}">${currentUser.avatar}</div>
                                <input type="text" id="input-${subjectId}" placeholder="Написать комментарий..." maxlength="300">
                                <button class="send-comment-btn" data-subject="${subjectId}">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        htmlContent += `</div>`; 
        semesterBlock.innerHTML = htmlContent;
        semestersContainer.appendChild(semesterBlock);
    });

    // 3. Подключение живых счетчиков
    allSubjectIds.forEach(subjectId => {
        const commentsRef = collection(db, "subjects", subjectId, "comments");
        const q = query(commentsRef, orderBy("timestamp", "asc"));
        
        onSnapshot(q, (snapshot) => {
            const countSpan = document.getElementById(`count-${subjectId}`);
            if (countSpan) countSpan.innerText = `(${snapshot.size})`;

            const list = document.getElementById(`list-${subjectId}`
                );
            if (!list) return;
            
            list.innerHTML = '';
            if (snapshot.empty) {
                list.innerHTML = '<p class="empty-msg">Пока нет комментариев. Напишите первым!</p>';
                return;
            }
            
            snapshot.forEach((doc) => {
                const data = doc.data();
                const card = document.createElement('div');
                card.className = "comment-card";
                
                let dateStr = "Только что";
                if (data.timestamp && data.timestamp.toDate) {
                    dateStr = data.timestamp.toDate().toLocaleString("ru-RU", {
                        day: "2-digit", month: "2-digit", year: "numeric",
                        hour: "2-digit", minute: "2-digit"
                    });
                }
                
                card.innerHTML = `
                    <div class="comment-avatar">${data.avatar || "👤"}</div>
                    <div class="comment-content">
                        <div class="comment-header-row">
                            <span class="comment-author">${escapeHtml(data.author || "Аноним")}</span>
                            <span class="comment-date">${dateStr}</span>
                        </div>
                        <div class="comment-text">${escapeHtml(data.text)}</div>
                    </div>
                `;
                list.appendChild(card);
            });
            list.scrollTop = list.scrollHeight;
        });
    });

    // 4. Логика кнопок
    semestersContainer.addEventListener('click', async (e) => {
        const toggleBtn = e.target.closest('.toggle-comments-btn');
        if (toggleBtn) {
            const targetId = toggleBtn.getAttribute('data-target');
            const container = document.getElementById(targetId);
            const label = document.getElementById(`label-${targetId}`);

            if (container.style.display === 'none' || container.style.display === '') {
                container.style.display = 'block';
                label.innerText = 'Скрыть';
                toggleBtn.classList.add('active');
                
                const list = document.getElementById(`list-${targetId}`);
                if (list) list.scrollTop = list.scrollHeight;
            } else {
                container.style.display = 'none';
                label.innerText = 'Комментарии';
                toggleBtn.classList.remove('active');
            }
        }

        const sendBtn = e.target.closest('.send-comment-btn');
        if (sendBtn) {
            const subjectId = sendBtn.getAttribute('data-subject');
            const input = document.getElementById(`input-${subjectId}`);
            const text = input.value.trim();
            
            if (text) {
                try {
                    sendBtn.disabled = true;
                    await addDoc(collection(db, "subjects", subjectId, "comments"), {
                        text: text,
                        author: currentUser.name,
                        avatar: currentUser.avatar,
                        timestamp: serverTimestamp()
                    });
                    input.value = '';
                } catch (err) {
                    console.error("Ошибка Firebase: ", err);
                    alert("Ошибка отправки комментария.");
                } finally {
                    sendBtn.disabled = false;
                }
            }
        }
    });

    function escapeHtml(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
});