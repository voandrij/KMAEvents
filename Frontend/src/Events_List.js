
var event_info = [
    {
        id:1,
        icon:'assets/images/2306korablik.jpg',
        title: "Останній Кораблик Сезону",
        day:"23",
        month:"06",
        year:"2016",
        hour:"19",
        location:"р. Дніпро",
        is_charity:false,
        is_free:true,
        ticketlink:"",
        contact:""
    },
    {
        id:2,
        icon:'assets/images/Folk.jpg',
        title: "Благодійний Концерт Folk Jam",
        day:"19",
        month:"05",
        year:"2016",
        hour:"18",
        location:"4 корпус, НаУКМА",
        is_charity:true,
        is_free:true,
        ticketlink:"",
        contact:""
    },
    {
        id:3,
        icon:'assets/images/Kupala.jpg',
        title: "Могилянське Купала",
        day:"18",
        month:"06",
        year:"2016",
        hour:"11",
        location:"Селище Бобриця",
        is_charity:false,
        is_free:false,
        ticketlink:"",
        contact:""
    },
    {
        id:4,
        icon:'assets/images/KMAFest.jpg',
        title: "Щорічний Фестиваль KMAFest",
        day:"25",
        month:"06",
        year:"2016",
        hour:"15",
        location:"Перший плац, НаУКМА",
        is_charity:false,
        is_free:true,
        ticketlink:"",
        contact:""
    },
    {
        id:5,
        icon:'assets/images/MusicDay.jpg',
        title: "День Вуличної Музики",
        day:"21",
        month:"05",
        year:"2016",
        hour:"16",
        location:"НаУКМА",
        is_charity:true,
        is_free:true,
        ticketlink:"",
        contact:""
    },
    {
        id:6,
        icon:'assets/images/voloshkovaLittusivka.jpg',
        title: "Волошкова Літтусівка",
        day:"13",
        month:"06",
        year:"2016",
        hour:"17",
        location:"Четвертий корпус, НаУКМА",
        is_charity:false,
        is_free:false,
        ticketlink:"",
        contact:""
    },{
        id:7,
        icon:'assets/images/harry.jpg',
        title: "Кіноніч Harry Potter",
        day:"25",
        month:"06",
        year:"2016",
        hour:"23",
        location:"KMArt Yard",
        is_charity:false,
        is_free:true,
        ticketlink:"",
        contact:""
    },
    {
        id:8,
        icon:'assets/images/mohyla_juzz.jpg',
        title: "Фестиваль Джазу",
        day:"26",
        month:"05",
        year:"2016",
        hour:"18",
        location:"KMArt Yard",
        is_charity:true,
        is_free:true,
        ticketlink:"",
        contact:""
    },
    {
        id: 9,
        icon: 'assets/images/phi_day.jpg',
        title: "День Факультету Інформатики",
        day: "27",
        month: "05",
        year: "2016",
        hour: "16",
        location: "Культурно-мистецький Центр, НаУКМА",
        is_charity: false,
        is_free: false,
        ticketlink: "",
        contact: ""
    },
    {
        id:10,
        icon:'assets/images/po_svitu.jpg',
        title: "Відкрита Лекція Про Міжнародні Стипендійні Програми",
        day:"23",
        month:"06",
        year:"2016",
        hour:"15",
        location:"KMArt Yard",
        is_charity:false,
        is_free:false,
        ticketlink:"",
        contact:""
    },
    {
        id:11,
        icon:'assets/images/year-ship.jpg',
        title: "Річний Кораблик",
        day:"24",
        month:"06",
        year:"2016",
        hour:"19",
        location:"Поштова Площа",
        is_charity:false,
        is_free:false,
        ticketlink:"",
        contact:""
    }
];


function sortResults(event_info) {
    event_info = event_info.sort(function(a, b) {
        // if(parseInt(a.year,10) > parseInt(b.year,10))
        //     return true;
        // if(parseInt(a.month,10) > parseInt(b.month,10))
        //     return true;

        if((a.day) >= (b.day)) {
            console.log(a.title+a.day+">"+b.day+b.title);
            return false;

        } else {
            console.log(a.title+a.day+"<"+b.day+b.title);
            return true;
        }
    });
    return event_info;
}

module.exports = sortResults(event_info);