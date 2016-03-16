QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "would_x_again_match_1", function( assert ) {
  assert.ok( filter_steam("10/10 would play again") == true, "Passed!" );
});

QUnit.test( "would_x_again_match_2", function( assert ) {
  assert.ok( filter_steam("WOULD HATE AGAIN AND AGAIN") == true, "Passed!" );
});

QUnit.test( "would_x_again_match_3", function( assert ) {
  assert.ok( filter_steam("would listen to Macklemore again") == true, "Passed!" );
});

QUnit.test( "would_not_x_again_match_1", function( assert ) {
  assert.ok( filter_steam("would not play again") == true, "Passed!" );
});

QUnit.test( "wouldnt_x_again_match_1", function( assert ) {
  assert.ok( filter_steam("wouldn't meme again") == true, "Passed!" );
});

QUnit.test( "wouldnt_x_again_match_2", function( assert ) {
  assert.ok( filter_steam("wouldnt meme again") == true, "Passed!" );
});

QUnit.test( "ign_match_1", function( assert ) {
  assert.ok( filter_steam("ign") == true, "Passed!" );
});

QUnit.test( "ign_match_2", function( assert ) {
  assert.ok( filter_steam("I love IGN!") == true, "Passed!" );
});

QUnit.test( "ign_no_match_1", function( assert ) {
  assert.ok( filter_steam("design") == false, "Passed!" );
});

QUnit.test( "best_ever_match_1", function( assert ) {
  assert.ok( filter_steam("Best game ever") == true, "Passed!" );
});

QUnit.test( "best_ever_match_2", function( assert ) {
  assert.ok( filter_steam("Best Macklemore game ever made") == true, "Passed!" );
});

QUnit.test( "best_ever_no_match_1", function( assert ) {
  assert.ok( filter_steam("Best Macklemore game. Not ever") == false, "Passed!" );
});

QUnit.test( "simuator_xxyy_match_1", function( assert ) {
  assert.ok( filter_steam("crash simulator 2015") == true, "Passed!" );
});

QUnit.test( "simuator_xxyy_match_2", function( assert ) {
  assert.ok( filter_steam("noscope simulator 2999") == true, "Passed!" );
});