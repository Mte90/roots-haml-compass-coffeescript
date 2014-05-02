<footer class="content-info" role="contentinfo">
  <div class="container">
    <?php dynamic_sidebar('sidebar-footer'); ?>
    <p>
      &copy;
      <?php date('Y').bloginfo('name'); ?>
    </p>
  </div>
</footer>
<?php wp_footer(); ?>