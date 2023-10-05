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
    <link rel="stylesheet" href="assets/css/modal_carrito.css">
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://kit.fontawesome.com/c3860b92ff.js" crossorigin="anonymous"></script>
    <title>Farmadso</title>
</head>

<body>
    
    <?php 
    require_once 'templates/header.html';
    ?>
  <main class="carrusleRecomendaciones">
  <?php 
    require_once 'templates/carrusel.html';
    require_once 'templates/carruselnovedades.html';
    ?>
</main>
<main class="carrusleRecomendaciones">
  <?php 
    require_once 'templates/carruseltop.html';
    require_once 'templates/carruselo.html';
    ?>
    <?php
    require_once 'templates/modal_carrito.html';
    ?>
</main>
    <?php 
    require_once 'templates/footer.html';
    ?>

    <script src="assets/js/index.js"></script>
    <script src="assets/js/menuDesplegable.js"></script>
    <script src="assets/js/menuHamburguer.js"></script>
    <script src="assets/js/carrusel.js"></script>
    <script src="assets/js/carruselnovedades.js"></script>
    <script src="assets/js/carruseltop.js"></script>
    <script src="assets/js/carruselo.js"></script>
    <script src="assets/js/modal_carrito.js" ></script>
    <script src="assets/js/carritocant.js" ></script>
    
</body>

</html>