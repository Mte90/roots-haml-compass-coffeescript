<header class="banner navbar navbar-default navbar-static-top container" role="banner">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle collapsed" data-target=".navbar-collapse" data-toggle="collapse" type="button">
        <span class="sr-only">
          Toggle navigation
        </span>
        <?php for ($i = 0; $i <= 2; $i++) { ?>
          <span class="icon-bar"></span>
        <?php } ?>
      </button>
      <a class="navbar-brand" href="<?php echo home_url(); ?>/">
        <?php bloginfo('name'); ?>
      </a>
    </div>
  </div>
  <nav class="collapse navbar-collapse" role="navigation">
    <?php
      if (has_nav_menu('primary_navigation')) {
          wp_nav_menu(array('theme_location' => 'primary_navigation', 'walker' => new Roots_Nav_Walker(), 'menu_class' => 'nav navbar-nav'));
      }
    ?>
  </nav>
</header>