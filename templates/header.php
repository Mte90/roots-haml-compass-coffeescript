<header class="banner navbar navbar-default navbar-static-top" role="banner">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle collapse" data-target=".navbar-collapse" data-toggle="collapse" type="button">
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
          wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav nav-pills'));
      }
    ?>
  </nav>
</header>