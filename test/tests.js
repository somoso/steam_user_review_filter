QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "rating_match_1", function( assert ) {
  assert.ok( filter_steam("10/10 would play again") == true, "Passed!" );
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
