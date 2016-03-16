QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "basic_match", function( assert ) {
  assert.ok( filter_steam("ign") == true, "Passed!" );
});

QUnit.test( "slightly_complex_match", function( assert ) {
  assert.ok( filter_steam("design") == false, "Passed!" );
});