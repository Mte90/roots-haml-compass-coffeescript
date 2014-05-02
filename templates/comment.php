<?php get_avatar($comment, $size = '64'); ?>
<div class="media-body">
  <h4 class="media-heading">
    <?php echo get_comment_author_link(); ?>
  </h4>
  <time datetime="<?php echo comment_date('c'); ?>">
    <a href="<?php echo htmlspecialchars(get_comment_link($comment->comment_ID)); ?>">
      <?php printf(__('%1$s', 'roots'), get_comment_date(),  get_comment_time()); ?>
    </a>
    <?php edit_comment_link(__('(Edit)', 'roots'), '', ''); ?>
  </time>
  <?php
    if ($comment->comment_approved == '0') {
    	echo '<div class="alert alert-info">';
    		_e('Your comment is awaiting moderation.', 'roots');
    	echo '</div>';
    }
  ?>
</div>
<?php comment_text(); ?>
<?php comment_reply_link(array_merge($args, array('depth' => $depth, 'max_depth' => $args['max_depth']))); ?>