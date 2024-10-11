'use strict';

new WOW({
    animateClass: 'animate__animated'
}).init();

$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
});

$('.test-popup-link').magnificPopup({
    type: 'image'
});

$('a[href^="#"]').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 800
    });
    return false;
});

$('.button_book').on('click', function () {
    let scrollTo = $('#order_section');
    $('html, body').animate({
        scrollTop: scrollTo.offset().top
    }, {
        duration: 800
    })
})

$('.button_video').on('click', function () {
    let scrollTo = $('#video_section');
    $('html, body').animate({
        scrollTop: scrollTo.offset().top
    }, {
        duration: 800
    })
})

$('#button_video').on('click', function () {
    $('.youtube_video').css('display', 'flex');
})

let arrayDay = [1, 2, 3, 4, 5, 6, 7];

let arrayTourTitle = [
    'Прогуляемся по Хусавику',
    'Увидим северное сияние',
    'Увидим Великий Гейсир',
    'Посетим вулкан Аскья',
    'Цветные горы Ландманналойгар',
    'Сходим в Перлан',
    'Познакомимся с исландскими овечками'

]

let arrayTourText = [
    'Попав в Хусавик, вы будете осматривать лучшие достопримечательности Исландии в окружении озер и водопадов. Обязательно искупайтесь в геотермальных бассейнах, целебные воды которых излечивают от множества заболеваний.',
    'Для того чтобы увидеть завораживающее зрелище и невероятный космический феномен, вам следует выбрать отели в Исландии, расположенные поблизости от парка Хльомскалагардур, дома Перлана или маяка Гротта.',
    'Не знаете, куда сходить в Исландии? Отправляйтесь в сторону холма Лугерфалла и вулкана Гекла. Помимо этих уникальных мест, вы сможете увидеть самый первый и самый большой гейзер Золотого кольца.',
    'Если вам интересны, прежде всего, загадочные достопримечательности Исландии, посетите центр острова, и вашим глазам откроется геологический феномен – вулкан Аскья. Местные жители говорят о том, что здесь без вести пропадают ученые. Ваш путь будет пролегать среди не менее интересных бескрайних лавовых полей.',
    'Невероятные пейзажи и уникальное буйство красок – все это цветная долина Ландманналойгар. Кипящие и парящие лужи соседствуют с удивительно прекрасными разноцветными горами – долина занимает почетное место в списке «самые красивые и красочные природные достопримечательности Исландии».',
    'Если вы хотите отдохнуть от осмотра природных памятников, посетите городскую котельную Перлан. Это величественное здание с крышей-куполом, собственным зимним садом и смотровой башней, и даже магазинами. Место расположения - холм Оскюлид.',
    'Мы отправимся в путешествие по одному из самых необычных туристических маршрутов Исландии — Золотому кольцу. Овeчки будут вaшими пocтoянными \n' +
    'cпутникaми. Ha пoляx и в кeмпингax, в гopныx дoлинax и пpямo пocpeди тpacc — кудa бы вы ни пoexaли, вaм будут вcтpeчaтьcя бpoдящиe caми пo ceбe oвeчки c \n' +
    'бapaшкaми.'
]

let arrayTourImage = [
    'Husavik.jpg',
    'northern_lights.jpg',
    'great_geysir.jpg',
    'askja.jpg',
    'Landmannalaugar.jpg',
    'Perlan.jpg',
    'sheeps.png'

]

let day = $('#day');
let tourTitle = $('#tour_title');
let tourText = $('#tour_text');
let tourImage = $('#tour_image');

day.text(arrayDay[0]);
tourTitle.text(arrayTourTitle[0]);
tourText.text(arrayTourText[0]);
tourImage.attr('src', '../image/tour_image/' + arrayTourImage[0]);

let i = 0
let rightArrow = $('#right_arrow')
let leftArrow = $('#left_arrow')

leftArrow.attr('stroke', 'black');
leftArrow.css('filter', 'none')

rightArrow.on('click', function () {

    if (i < arrayDay.length - 1) {
        rightArrow.attr('stroke', 'white');
        rightArrow.css('filter', 'drop-shadow(0px 2px 6px rgba(255, 255, 255, 0.5))')
        leftArrow.attr('stroke', 'white');
        leftArrow.css('filter', 'drop-shadow(0px 2px 6px rgba(255, 255, 255, 0.5))')
        day.text(arrayDay[i + 1]);
        tourTitle.text(arrayTourTitle[i + 1]);
        tourText.text(arrayTourText[i + 1]);
        tourImage.attr('src', '../image/tour_image/' + arrayTourImage[i + 1]);
        i++
    }
    if (i === arrayDay.length - 1) {
        rightArrow.attr('stroke', 'black');
        rightArrow.css('filter', 'none')
    }
})

leftArrow.on('click', function () {

    if (i > 0) {
        leftArrow.attr('stroke', 'white');
        leftArrow.css('filter', 'drop-shadow(0px 2px 6px rgba(255, 255, 255, 0.5))')
        rightArrow.attr('stroke', 'white');
        rightArrow.css('filter', 'drop-shadow(0px 2px 6px rgba(255, 255, 255, 0.5))')
        day.text(arrayDay[i - 1]);
        tourTitle.text(arrayTourTitle[i - 1]);
        tourText.text(arrayTourText[i - 1]);
        tourImage.attr('src', '../image/tour_image/' + arrayTourImage[i - 1]);
        i--
    }
    if (i === 0) {
        leftArrow.attr('stroke', 'black');
        leftArrow.css('filter', 'none')
    }
})

let arrayName = ['Дарья', 'Дмитрий', 'Алексей', 'Евгения', 'Даниил', 'Виктория', 'Иван']
let arrayGrade = ['10 / 10', '8 / 10', '9 / 10', '9 / 10', '10 / 10', '8 / 10', '10 / 10'];
let arrayReviews = [
    'Очень хотелось в своем путешествии в Исландию захватить хотя бы кусочек Гренландии, поэтому выбрала однодневный тур в Кулусук из Рейкьявика, тур включала перелет туда-обратно и 4 часа в Кулусуке. В общем все, что было заявлено мы посмотрели, прогулялись до поселка, внутри походили, зашли в местный небольшой музей.',
    'Путешествие очень понравилось. Автобусы комфортные, виды незабываемые и достаточное количество остановок, где можно перекусить и посетить туалет. Основные остановки - теплица, функционирующая засечет геотермальных вод, водопад, долина гейзеров и национальный парк с тектоническим разломом.',
    'Мы провели 10-дневный тур по Кольцевой дороге, предложенный Iceland Travel. В день нашего прибытия мы самостоятельно заказали Reykjavik Food Walk - Local Foodie Adventure в Исландии. Наш Гид, Бергер был очень веселым и проводил нас через центр Рейкьявика, подчеркивая местные блюда и точки интереса.',
    'Поездка была фантастической. Все прошло гладко, никаких волнений от разбитых самолетов или вулкана под Грендавиком у нас не было. Компания «Iceland Travel» организовала действительно хороший небольшой тур (нас шестеро плюс БГ). Темп показался действительно подходящим для зрелых (пожилых) путешественников.',
    'Мы имели удовольствие видеть Дэниела в качестве гида во время нашей недавней поездки в Исландию, какой звездный парень буквально, его юмор и знание всех геологических вещей сделали поездку стоящей, и особая благодарность Арту за обход, который позволил нам увидеть северное сияние.',
    'Очень понравился остров и его жители. Пейзаж был потрясающим. Но, должен сказать, северное сияние в августе нас поразило. Ничего похожего на них раньше. Дорого, но стоит каждой копейки.',
    'Хочу сказать организаторам тура огромное спасибо за это шикарное путешествие! Мы с девушкой давно мечтали побывать в Исландии и благодаря ребятам из iceland.travel эта страна оставила невероятные впечатления далёкого, но теперь изведанного края, которые мы запомним надолго!'
]

let arrayReviewsImage = [
    'url(../image/reviews_image/review1.jpg',
    'url(../image/reviews_image/review2.jpg',
    'url(../image/reviews_image/review3.jpg',
    'url(../image/reviews_image/review4.jpg',
    'url(../image/reviews_image/review5.jpg',
    'url(../image/reviews_image/review6.jpg',
    'url(../image/reviews_image/review7.png',
]

let nameReviews = $('#reviews_name');
let gradeReviews = $('#reviews_grade');
let textReviews = $('#reviews_text');
let reviewsImage = $('#reviews_image');

nameReviews.text(arrayName[0]);
gradeReviews.text(arrayGrade[0]);
textReviews.text(arrayReviews[0]);
reviewsImage.css('background-image', arrayReviewsImage[0]);

let r = 0;
let rightArrowReviews = $('#right_arrow_reviews');
let leftArrowReviews = $('#left_arrow_reviews');

leftArrowReviews.attr('stroke', '#7c7c7c');

rightArrowReviews.on('click', function() {

    if (r < arrayName.length - 1) {
        leftArrowReviews.attr('stroke', '#2c2c2c');
        nameReviews.text(arrayName[r + 1]);
        gradeReviews.text(arrayGrade[r + 1]);
        textReviews.text(arrayReviews[r + 1]);
        reviewsImage.css('background-image', arrayReviewsImage[r + 1]);
        r++
    }
    if (r === 6) {
        rightArrowReviews.attr('stroke', '#7c7c7c');
    }
})

leftArrowReviews.on('click', function() {

    if (r > 0) {
        rightArrowReviews.attr('stroke', '#2c2c2c');
        nameReviews.text(arrayName[r - 1]);
        gradeReviews.text(arrayGrade[r - 1]);
        textReviews.text(arrayReviews[r - 1]);
        reviewsImage.css('background-image', arrayReviewsImage[r - 1]);
        r--
    }
    if (r === 0) {
        leftArrowReviews.attr('stroke', '#7c7c7c');
    }
})
let galleryNumber = $('.gallery_number');
let gallerySlide = $('.gallery_slide');
let g = 0;

galleryNumber.eq(g).attr('fill', 'white');
gallerySlide.eq(g).css('display', 'flex');

let rightGalleryArrow = $('#right_gallery_arrow');
let leftGalleryArrow = $('#left_gallery_arrow');

rightGalleryArrow.on('click', function() {
    if (g < 3) {
        galleryNumber.eq(g).attr('fill', 'none');
        gallerySlide.eq(g).css('display', 'none');
        galleryNumber.eq(g + 1).attr('fill', 'white');
        gallerySlide.eq(g + 1).css('display', 'flex');
        g++
    }
})

leftGalleryArrow.on('click', function() {
    if (g !== 0) {
        galleryNumber.eq(g).attr('fill', 'none');
        gallerySlide.eq(g).css('display', 'none');
        galleryNumber.eq(g - 1).attr('fill', 'white');
        gallerySlide.eq(g - 1).css('display', 'flex');
        g--
    }
})

let number = $('.number');
let numberOfPeople = 0

number.on('click', function() {
    number.css({
        backgroundColor: 'transparent',
        borderColor: '1px solid white',
        color: 'white'
    });
    $(this).css({
        backgroundColor: 'white',
        borderColor: '1px solid #2c2c2c',
        color: '#2c2c2c'
    });
    numberOfPeople = $(this).val();
})

$(".phone_mask").mask("+7(999)999-99-99");
let name = $('.name');
let phone = $('.phone');

$('#submit').on('click', function() {
    let hasError = false;

    if (numberOfPeople === 0) {
        number.css('border', '1px solid red');
        $('.number_error').css('display', 'block');
    } if (numberOfPeople > 0) {
        number.css('border', '1px solid white');
        hasError = true;
    }
    if (name.val() === '') {
        name.css('border', '1px solid red');
        $('.name_error').css('display', 'block');
    } if (name.val() !== '') {
        name.css('border', '1px solid white');
        hasError = true;
    }
    if (phone.val() === '') {
        phone.css('border', '1px solid red');
        $('.phone_error').css('display', 'block');
    } if (phone.val() !== '') {
        phone.css('border', '1px solid white');
        hasError = true;
    }

    if (hasError === true) {
        $.ajax({
            method: "POST",
            url: "https://testologia.ru/checkout",
            data: {
                number: numberOfPeople,
                name: name.val(),
                phone: phone.val(),

            }
        })
            .done(function(result) {
                if (result.success === 1) {
                    $('.thanks').css('display', 'flex');
                } if (result.success === 0) {
                    alert('Не удалось отравить заявку');
                }
            })
    }
})

$('.number_error').hover(function() {
    $('.number_error').css('display', 'none');
})
$('.name_error').hover(function() {
    $('.name_error').css('display', 'none');
})
$('.phone_error').hover(function() {
    $('.phone_error').css('display', 'none');
})

$('.burger').on('click', function() {
    $('.menu').css('display', 'flex');
})

$('.menu_link').on('click', function() {
    $('.menu').css('display', 'none');
})

$('.close').on('click', function() {
    $('.menu').css('display', 'none');
})

const mobileWidthMediaQuery = window.matchMedia('(max-width: 769px)')
mobileWidthMediaQuery.addEventListener('change', function () {
    if (!mobileWidthMediaQuery.matches) {
        $('.menu').css('display', 'flex');
    } if (mobileWidthMediaQuery.matches) {
        $('.menu').css('display', 'none');
    }
})


