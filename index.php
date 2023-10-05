<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="shortcut icon" href="assets/img/logoFarmadso.png" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/footer.css">
    <link rel="stylesheet" href="assets/css/index.css">
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/carrusel.css">

    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Farmadso</title>
</head>

<body>
    <?php 
    require_once 'templates/header.html';
    ?>
  <main>
    <div class="main">
        <div class="arrow" onclick="move('right')">&#10094;</div>
        <div class="carousel-container">
            <div class="articles">a</div>
            <div class="articles">b</div>
            <div class="articles">c</div>
            <div class="articles">d</div>
            <div class="articles">e</div>
            <div class="articles">f</div>
            <div class="articles">g</div>
            <div class="articles">h</div>
            <div class="articles">a</div>
        </div>
        <div class="arrow" onclick="move('left')">&#10095;</div>
    </div>

    <div class="dots">
        <div class="dot" onclick="goToSlide(0)"></div>
        <div class="dot" onclick="goToSlide(1)"></div>
        <div class="dot" onclick="goToSlide(2)"></div>
        <div class="dot" onclick="goToSlide(3)"></div>
        <div class="dot" onclick="goToSlide(4)"></div>
        <div class="dot" onclick="goToSlide(5)"></div>
        <div class="dot" onclick="goToSlide(6)"></div>
        <div class="dot" onclick="goToSlide(7)"></div>
        <div class="dot" onclick="goToSlide(8)"></div>
    </div>
</main>

    <?php 
    require_once 'templates/footer.html';
    ?>

    <script src="assets/js/index.js"></script>
    <script src="assets/js/menuDesplegable.js"></script>
    <script src="assets/js/menuHamburguer.js"></script>
    <script src="assets/js/carrusel.js"></script>
</body>

</html>