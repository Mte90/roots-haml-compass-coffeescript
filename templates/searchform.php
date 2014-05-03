<form class="search-form form-inline" role="search" method="get" action="<?php echo home_url('/'); ?>">
  <div class="input-group">
    <input class="search-field form-control" type="search" value="<?php if (is_search()) { echo get_search_query(); } ?>" name="s" placeholder="<?php _e('Search', 'roots'); ?> <?php bloginfo('name'); ?>">
    <label class="hide"><?php echo __('Search for:', 'roots'); ?></label>
    <span class="input-group-btn">
      <button class="search-submit btn btn-default" type="submit"><?php echo __('Search', 'roots'); ?>; ?></button>
    </span>
  </div>
</form>