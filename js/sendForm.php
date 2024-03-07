<? // #начало Обработчик данных
header("Content-Type: text/html; charset=UTF-8");


if ($_POST['date-in']) {
    $dateIn = $_POST['date-in'];
}
if ($_POST['date-out']) {
    $dateOut = $_POST['date-out'];
}
if ($_POST['type-room']) {
    $typeRoom = $_POST['type-room'];
}
if ($_POST['quantity-adult']) {
    $quantityAdult = $_POST['quantity-adult'];
}
if ($_POST['quantity-children-before4']) {
    $childrenBefore4 = $_POST['quantity-children-before4'];
}
if ($_POST['quantity-children-after4']) {
    $childrenBefore4 = $_POST['quantity-children-after4'];
}
if ($_POST['name']) {
    $name = htmlspecialchars($_POST['name']);
}
if ($_POST['phone']) {
    $phone = htmlspecialchars($_POST['phone']);
}
if ($_POST['email']) {
    $email = htmlspecialchars($_POST['email']);
}
if ($_POST['coments']) {
    $text = htmlspecialchars($_POST['coments']);
}
// if ($_POST['message']) {
//     $message = htmlspecialchars($_POST['message']);
// }
// $ip_r = $_SERVER['REMOTE_ADDR'];

$product = "Отель Грин Дача"; // Подпись отправителя

// $name1 =  substr(htmlspecialchars(trim($name)), 0, 100);
// $phone1 =  substr(htmlspecialchars(trim($phone)), 0, 20);

// if (empty($name1)) {
//     echo '<h2><p align=center><font color="red">Внимание! Запрещено отправлять пустые поля.<br> Вернитесь и заполните обязательные поля <b>"Имя"</b> и <b>"Телефон"</b></font><br><br><a href="javascript:history.back()">Вернуться назад</a></p></h2>';
//     exit;
// }

// if (empty($phone1)) {
//     echo '<h2><p align=center><font color="red">Внимание! Запрещено отправлять пустые поля.<br> Вернитесь и заполните обязательные поля <b>"Имя"</b> и <b>"Телефон"</b></font><br><br><a href="javascript:history.back()">Вернуться назад</a></p></h2>';
//     exit;
// }

// if ($_POST['type-room']) {

//     if ($_POST['tip'] == '1') {
//         $model = 'Hover Ball 1 шт';
//     }
//     if ($_POST['tip'] == '2') {
//         $model = 'Hover Ball 3 шт';
//     }
//     if ($_POST['tip'] == '3') {
//         $model = 'Hover Ball 6 шт';
//     }
// } else {
//     $model = '<span style="color:grey;">Данных нет</span>';
// }

$tema_r = 'Бронирование номера ' . $typeRoom;
$to = "shemet-opc@mail.ru"; // ЗДЕСЬ МЕНЯЕМ ПОЧТУ НА КОТОРУЮ ПРИХОДЯТ ЗАКАЗЫ!
$from = "{$product} <noreply@{$_SERVER['HTTP_HOST']}>"; // Адрес отправителя

$subject = "=?utf-8?B?" . base64_encode("$tema_r") . "?=";
$header = "From: $from";
$header .= "\nContent-type: text/html; charset=\"utf-8\"";
$message = 'Дата заезда: ' . $dateIn . '<br>' .
    'Дата выезда: ' . $dateOut . '<br>' .
    'Номер: ' . $typeRoom . '<br>' .
    'Количество взрослых: ' . $quantityAdult . '<br>' .
    'Количество детей до 4-х лет: ' . $childrenBefore4 . '<br>' .
    'Количество детей от 4-х до 18 лет: ' . $childrenAfter4 . '<br>' .
    'Имя: ' . $name . ' <br>
Телефон: ' . $phone . ' <br>
E-mail: ' . $email . ' <br>
Сообщение: ' . $coments . ' <br>


<br>Заказано с сайта: ' . $_SERVER['HTTP_REFERER'] . ' <br>Время заказа: ' . date("Y-m-d H:i:s") . '';
?>

<? if (mail($to, $subject, $message, $header)) : ?>

    <!-- ========================================================= НАЧИНАЕМ ФОРМИРОВАТЬ HTML СТРАНИЦУ ПОДТВЕРЖДЕНИЯ ======================================================== -->

    <!DOCTYPE html>
    <html lang="ru">

    <head>
        <meta charset="UTF-8">
        <title>Спасибо за заказ</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400&amp;subset=cyrillic" rel="stylesheet">
        <style>
            a {
                color: #fff;
                text-decoration: none
            }

            .container {
                width: 100%;
                height: 100%;
                font-family: 'Open Sans', sans-serif
            }

            .wrap {
                width: 700px;
                margin: 165px auto 0;
                text-align: center
            }

            .zag {
                font-size: 29px;
                font-weight: 400;
                margin-bottom: 0;
                margin-top: 23px;
                color: #38382F
            }

            .podzag {
                font-size: 20px;
                color: #7F7F7F;
                font-weight: 300;
                margin-top: 12
            }

            .button {
                background: #38382F;
                padding: 12px 25px;
                margin: 0 auto
            }

            .bor {
                margin-top: 45px
            }

            .img {
                width: 100px;
                height: 100px;
                background: url(img/900e8526e8b44b8993f6e4ca19ce7891.png) center center no-repeat;
                margin: 0 auto
            }
        </style>
    </head>

    <body>
        <div class="container">
            <div class="wrap">
                <div class="img"></div>
                <p class="zag">Спасибо. Ваша заявка успешно отправлена.</p>
                <p class="podzag">Наш менеджер свяжется с Вами в ближайшее время.</p>
                <div class="bor">
                    <a href="index.html" class="button">Вернуться на сайт</a>
                </div>
            </div>
        </div>

    </body>

    </html>


    <!-- ======================================================== ОКОНЧАНИЕ СТРАНИЦЫ ПОДТВЕРЖДЕНИЯ ======================================================== -->

<? endif; ?>