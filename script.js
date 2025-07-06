
document.addEventListener('DOMContentLoaded', () => {
    /* === Datos === */
    const agendaData = {"1": {"title": "D\u00eda 1: Mi\u00e9rcoles 16 - Llegada M\u00e1gica", "events": [{"time": "12:00", "desc": "Salida hacia el Aeropuerto Adolfo Su\u00e1rez Madrid-Barajas (T2).", "id": "d1e1"}, {"time": "14:15", "desc": "Vuelo a Par\u00eds (Air Europa 8KN4F8).", "id": "d1e2"}, {"time": "17:45", "desc": "Llegada a Par\u00eds-Orly y traslado en Magical Shuttle.", "id": "d1e3"}, {"time": "19:30", "desc": "Check-in en Disney's Hotel Cheyenne y recogida de MagicPass.", "id": "d1e4"}, {"time": "20:00", "desc": "Cena en Chuck Wagon Caf\u00e9 o Annette's Diner (Disney Village).", "id": "d1e5"}, {"time": "21:00", "desc": "Paseo por Disney Village y visita a World of Disney.", "id": "d1e6"}, {"time": "22:00", "desc": "Preparar mochila para el d\u00eda siguiente y descansar.", "id": "d1e7"}]}, "2": {"title": "D\u00eda 2: Jueves 17 - Aventura en Disneyland Park", "events": [{"time": "07:00", "desc": "Desayuno en el hotel para coger energ\u00edas.", "id": "d2e1"}, {"time": "08:30", "desc": "Extra Magic Time: Big Thunder Mountain y Peter Pan's Flight.", "id": "d2e2"}, {"time": "09:30", "desc": "Atracciones: Pirates of the Caribbean y Phantom Manor.", "id": "d2e3"}, {"time": "11:30", "desc": "Ver la cabalgata Disney Stars on Parade (Opcional).", "id": "d2e4"}, {"time": "13:00", "desc": "Comida en Agrabah Caf\u00e9 o Plaza Gardens.", "id": "d2e5"}, {"time": "14:30", "desc": "Descanso opcional en el hotel o atracciones tranquilas.", "id": "d2e6"}, {"time": "16:30", "desc": "Explorar Adventure Isle y La Cabane des Robinson.", "id": "d2e7"}, {"time": "21:30", "desc": "Ir a la zona reservada para el show nocturno.", "id": "d2e8"}, {"time": "22:00", "desc": "Disfrutar del espect\u00e1culo nocturno 'Disney Tales of Magic'.", "id": "d2e9"}]}, "3": {"title": "D\u00eda 3: Viernes 18 - Walt Disney Studios y Premier Access", "events": [{"time": "08:30", "desc": "Extra Magic Time en Studios: Crush's Coaster y Spider-Man W.E.B. Adventure.", "id": "d3e1"}, {"time": "09:30", "desc": "Usar Premier Access: Avengers Assemble y Tower of Terror.", "id": "d3e2"}, {"time": "12:30", "desc": "Almuerzo r\u00e1pido en Stark Factory (Avengers Campus).", "id": "d3e3"}, {"time": "16:30", "desc": "Ir al Studio Theater para el show de Pixar.", "id": "d3e4"}, {"time": "16:50", "desc": "Ver el musical 'Together: a Pixar Musical Adventure'.", "id": "d3e5"}, {"time": "18:30", "desc": "Regreso a Disneyland Park para usar el resto de Premier Access.", "id": "d3e6"}, {"time": "20:30", "desc": "Cena divertida en Annette's Diner o Earl of Sandwich.", "id": "d3e7"}]}, "4": {"title": "D\u00eda 4: S\u00e1bado 19 - Favoritos y Cena con Personajes", "events": [{"time": "09:30", "desc": "Repetir las atracciones favoritas de Leo en el parque que elija.", "id": "d4e1"}, {"time": "12:00", "desc": "Buscar encuentros espont\u00e1neos con personajes por el parque.", "id": "d4e2"}, {"time": "13:00", "desc": "Almuerzo ligero en Fuente del Oro o Hakuna Matata.", "id": "d4e3"}, {"time": "14:00", "desc": "Tarde de relax, compras de recuerdos y fotos familiares.", "id": "d4e4"}, {"time": "17:00", "desc": "Vuelta al hotel para descansar y prepararse para la cena.", "id": "d4e5"}, {"time": "20:45", "desc": "Llegada al restaurante Plaza Gardens en Main Street.", "id": "d4e6"}, {"time": "21:00", "desc": "\u00a1Cena m\u00e1gica con Mickey y sus amigos!", "id": "d4e7"}, {"time": "22:30", "desc": "\u00daltimo paseo por Main Street iluminado y regreso al hotel.", "id": "d4e8"}]}, "5": {"title": "D\u00eda 5: Domingo 20 - Despedida y Regreso", "events": [{"time": "08:00", "desc": "Check-out y dejar las maletas en la consigna del hotel.", "id": "d5e1"}, {"time": "09:00", "desc": "\u00daltimo paseo por el parque, repetir atracci\u00f3n favorita y fotos.", "id": "d5e2"}, {"time": "11:30", "desc": "Snack de despedida y \u00faltimas compras en Disney Village.", "id": "d5e3"}, {"time": "13:30", "desc": "Recoger equipaje y dirigirse a la parada del Magical Shuttle.", "id": "d5e4"}, {"time": "15:30", "desc": "Llegada al aeropuerto de Orly y facturaci\u00f3n.", "id": "d5e5"}, {"time": "18:00", "desc": "Vuelo de regreso a Madrid. \u00a1Fin de la aventura!", "id": "d5e6"}]}};
    const tipsData   = [{"icon": "\ud83d\udcf1", "title": "Usa la App Oficial", "desc": "Indispensable para ver tiempos de espera, horarios de shows y reservar encuentros."}, {"icon": "\u26a1", "title": "Extra Magic Time", "desc": "Aprovecha la hora extra por la ma\u00f1ana para montar en las atracciones m\u00e1s populares sin colas."}, {"icon": "\ud83d\udca7", "title": "Mantente Hidratado", "desc": "Lleva botellas de agua reutilizables. Hay fuentes por todo el parque para rellenarlas gratis."}, {"icon": "\ud83d\udc5f", "title": "Calzado C\u00f3modo", "desc": "Caminar\u00e1s much\u00edsimo. La comodidad es clave para aguantar todo el d\u00eda con energ\u00eda."}, {"icon": "\ud83d\udcf8", "title": "Cuaderno de Aut\u00f3grafos", "desc": "\u00a1No lo olvides! A Leo le encantar\u00e1 coleccionar las firmas de sus personajes favoritos."}, {"icon": "\ud83c\udf7d\ufe0f", "title": "Reserva Restaurantes", "desc": "Si quieres comer en un sitio espec\u00edfico, reserva con antelaci\u00f3n desde la app para asegurar tu mesa."}, {"icon": " Rider", "title": "Single Rider", "desc": "En algunas atracciones, si no les importa montar por separado, esta cola es mucho m\u00e1s r\u00e1pida."}, {"icon": "\ud83d\udd0b", "title": "Bater\u00eda Externa", "desc": "Entre fotos, v\u00eddeos y la app, el m\u00f3vil se gasta r\u00e1pido. Una power bank es tu mejor aliada."}, {"icon": "\ud83d\udecd\ufe0f", "title": "Servicio de Compras", "desc": "Puedes enviar tus compras a tu hotel Disney y recogerlas por la noche para no cargar con bolsas."}, {"icon": "\ud83d\ude34", "title": "Planifica Descansos", "desc": "Sobre todo a mediod\u00eda. Un peque\u00f1o descanso recarga las pilas de toda la familia para seguir hasta la noche."}];
    const showsData  = [{"id": "parade", "img": "https://placehold.co/600x400/818cf8/ffffff?text=Parade", "title": "Disney Stars on Parade", "time": "Jueves 17, 11:30 (aprox)", "location": "Recorrido del Parque Disneyland", "desc": "Una espectacular cabalgata con carrozas de las pel\u00edculas m\u00e1s famosas de Disney y Pixar. \u00a1No te pierdas a tus personajes favoritos!"}, {"id": "tales", "img": "https://placehold.co/600x400/f59e0b/ffffff?text=Show+Nocturno", "title": "Disney Tales of Magic", "time": "Jueves 17, 22:00", "location": "Frente al Castillo", "desc": "El nuevo show nocturno que combina fuegos artificiales, proyecciones, fuentes y drones para una experiencia m\u00e1gica inolvidable."}, {"id": "pixar", "img": "https://placehold.co/600x400/10b981/ffffff?text=Pixar", "title": "Together: a Pixar Musical", "time": "Viernes 18, 16:50", "location": "Studio Theater (Walt Disney Studios)", "desc": "Un emotivo y vibrante musical en vivo que te transportar\u00e1 a los mundos de Toy Story, Coco, Up y Monstruos S.A."}, {"id": "character_dinner", "img": "https://placehold.co/600x400/ef4444/ffffff?text=Cena+M\u00e1gica", "title": "Cena con Personajes", "time": "S\u00e1bado 19, 21:00", "location": "Plaza Gardens (Disneyland Park)", "desc": "Un delicioso buffet donde Mickey, Minnie y sus amigos se acercar\u00e1n a vuestra mesa para fotos, abrazos y aut\u00f3grafos. \u00a1El sue\u00f1o de Leo!"}];

    /* === Elementos DOM === */
    const homeScreen         = document.getElementById('home-screen');
    const mainApp            = document.getElementById('main-app');
    const startBtn           = document.getElementById('start-adventure-btn');
    const uploadPhotoInput   = document.getElementById('upload-photo-input');
    const navButtons         = document.querySelectorAll('.nav-btn');
    const mainTitle          = document.getElementById('main-title');
    const views = {
        agenda: document.getElementById('agenda-view'),
        tips:   document.getElementById('tips-view'),
        shows:  document.getElementById('shows-view')
    };
    const dayTabs            = document.querySelectorAll('.day-tab');
    const dayContentContainer= document.getElementById('day-content-container');
    const exitBtn            = document.getElementById('exit-to-home-btn');

    /* === Estado === */
    let currentView  = 'agenda';
    let currentDay   = '1';
    let checkedItems = JSON.parse(localStorage.getItem('disneyCheckedItems')||'[]');

    /* === Funciones === */
    function setBackground(imageUrl){
        homeScreen.style.backgroundImage = `linear-gradient(to top, rgba(253,251,247,1) 20%, rgba(253,251,247,0) 100%), url('${imageUrl}')`;
    }

    function loadInitialBackground(){
        const saved = localStorage.getItem('disneyCustomBg');
        if(saved){ setBackground(saved); }
    }

    /* -- Agenda -- */
    function renderAgenda(day){
        const data = agendaData[day];
        if(!data) return;
        let html = `
            <h2 class="text-xl font-bold mb-4 text-gray-700">${data.title}</h2>
            <div class="space-y-3">
        `;
        data.events.forEach(ev=>{
            const isChecked = checkedItems.includes(ev.id) ? 'checked' : '';
            html += `
                <div class="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <input type="checkbox" id="${ev.id}" class="custom-checkbox" data-id="${ev.id}" ${isChecked}>
                    <label for="${ev.id}" class="ml-4 flex-grow checkbox-label">
                        <span class="font-semibold text-gray-800">${ev.time}</span>
                        <span class="text-gray-600"> - ${ev.desc}</span>
                    </label>
                </div>
            `;
        });
        html += '</div>';
        dayContentContainer.innerHTML = html;
        addCheckboxListeners();
    }

    /* -- Tips -- */
    function renderTips(){
        let html = '<div class="space-y-4">';
        tipsData.forEach(tip=>{
            html += `
                <div class="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <div class="text-2xl mr-4">${tip.icon}</div>
                    <div>
                        <h3 class="font-bold text-gray-800">${tip.title}</h3>
                        <p class="text-gray-600 text-sm">${tip.desc}</p>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        views.tips.innerHTML = html;
    }

    /* -- Shows -- */
    function renderShows(){
        let html = '<div class="space-y-4">';
        showsData.forEach(show=>{
            const customImg = localStorage.getItem(`disneyShowImg_${show.id}`);
            html += `
                <div class="bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="relative">
                        <img id="show-img-${show.id}" src="${customImg || show.img}" alt="${show.title}" class="w-full h-32 object-cover">
                        <label for="upload-show-${show.id}" class="absolute bottom-2 right-2 bg-white/70 backdrop-blur-sm text-gray-800 text-xs font-semibold py-1 px-2 rounded-lg shadow cursor-pointer hover:bg-white transition">
                            Subir foto
                        </label>
                        <input type="file" id="upload-show-${show.id}" data-show-id="${show.id}" class="hidden show-upload-input" accept="image/*">
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-gray-900">${show.title}</h3>
                        <p class="text-sm font-semibold text-amber-600">${show.time}</p>
                        <p class="text-sm text-gray-500 mb-2">${show.location}</p>
                        <p class="text-gray-700 text-sm">${show.desc}</p>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        views.shows.innerHTML = html;
        addShowUploadListeners();
    }

    function handleShowPhotoUpload(e){
        const file   = e.target.files[0];
        const showId = e.target.dataset.showId;
        if(file && showId){
            const reader = new FileReader();
            reader.onload = ev=>{
                const url = ev.target.result;
                document.getElementById(`show-img-${showId}`).src = url;
                localStorage.setItem(`disneyShowImg_${showId}`, url);
            };
            reader.readAsDataURL(file);
        }
    }

    function addShowUploadListeners(){
        document.querySelectorAll('.show-upload-input').forEach(inp=>{
            inp.addEventListener('change', handleShowPhotoUpload);
        });
    }

    /* -- Navegación -- */
    function switchView(viewName){
        if(viewName === currentView) return;

        const currentNav = document.querySelector(`.nav-btn[data-view="${currentView}"]`);
        const nextNav    = document.querySelector(`.nav-btn[data-view="${viewName}"]`);
        currentNav.classList.remove('text-amber-500');
        currentNav.classList.add('text-gray-400');
        nextNav.classList.remove('text-gray-400');
        nextNav.classList.add('text-amber-500');

        views[currentView].classList.add('hidden');
        views[viewName].classList.remove('hidden');

        currentView = viewName;
        mainTitle.textContent = (viewName === 'agenda') ? 'Agenda del Viaje'
                             : (viewName === 'tips')   ? 'Trucos y Consejos'
                             : 'Espectáculos';
    }

    function switchDay(day){
        if(day === currentDay) return;

        const currentTab = document.querySelector(`.day-tab[data-day="${currentDay}"]`);
        const nextTab    = document.querySelector(`.day-tab[data-day="${day}"]`);

        currentTab.classList.remove('text-amber-600','bg-white','shadow');
        currentTab.classList.add('text-gray-500');
        nextTab.classList.remove('text-gray-500');
        nextTab.classList.add('text-amber-600','bg-white','shadow');

        currentDay = day;
        renderAgenda(day);
    }

    /* -- Checkboxes -- */
    function handleCheckboxChange(e){
        const id = e.target.dataset.id;
        if(e.target.checked){
            if(!checkedItems.includes(id)) checkedItems.push(id);
        }else{
            checkedItems = checkedItems.filter(x=>x!==id);
        }
        localStorage.setItem('disneyCheckedItems', JSON.stringify(checkedItems));
    }
    function addCheckboxListeners(){
        document.querySelectorAll('.custom-checkbox').forEach(cb=>{
            cb.addEventListener('change', handleCheckboxChange);
        });
    }

    /* === Eventos iniciales === */
    startBtn.addEventListener('click', () => {
        homeScreen.classList.add('hidden');
        mainApp.classList.remove('hidden');
    });

    exitBtn.addEventListener('click', () => {
        mainApp.classList.add('hidden');
        homeScreen.classList.remove('hidden');
        if(currentView !== 'agenda') switchView('agenda');
    });

    uploadPhotoInput.addEventListener('change', e=>{
        const file = e.target.files[0];
        if(file && file.type.startsWith('image/')){
            const reader = new FileReader();
            reader.onload = ev=>{
                const url = ev.target.result;
                setBackground(url);
                localStorage.setItem('disneyCustomBg', url);
            };
            reader.readAsDataURL(file);
        }
    });

    navButtons.forEach(btn=>{
        btn.addEventListener('click', ()=>switchView(btn.dataset.view));
    });
    dayTabs.forEach(tab=>{
        tab.addEventListener('click', ()=>switchDay(tab.dataset.day));
    });

    /* Primer render */
    loadInitialBackground();
    renderAgenda(currentDay);
    renderTips();
    renderShows();
});
