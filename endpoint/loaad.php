<?php

/* ARC2 static class inclusion */ 
include_once('/arc2/ARC2.php');

/* MySQL and endpoint configuration */ 
$config = array(
  /* db */
  'db_name' => 'endpoint',
  'db_user' => '',
  'db_pwd' => '',
  /* store */
  'store_name' => 'ad_schema',
  /* stop after 100 errors */
  'max_errors' => 100,
);
$store = ARC2::getStore($config);
if (!$store->isSetUp()) {
  $store->setUp();
}
#$store->query('LOAD <file://' . dirname(__FILE__) . '/globalHungerIndex.rdf>');
mysql_query("set names 'utf8'");
$store->query('LOAD <file:///theseoul/ontology/ad.rdf>');
//$store->query('LOAD <file:///my.rdfs>');

/* request handling */
//$store->go();

?>