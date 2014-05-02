<header class="banner navbar navbar-default navbar-static-top" role="banner">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">
          Toggle navigation
        </span>
        <?php for ($i = 0; $i <= 2; $i++) { ?>
          <span class="icon-bar"></span>
        <?php } ?>
      </button>
    </div>
    <a class="navbar-brand" href="<?php echo home_url(); ?>/">
      <?php bloginfo('name'); ?>
    </a>
    <nav class="collapse navbar-collapse" role="navigation">
      <?php
        if (has_nav_menu('primary_navigation')) {
        	wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav navbar-nav'));
        }
      ?>
    </nav>
  </div>
</header>