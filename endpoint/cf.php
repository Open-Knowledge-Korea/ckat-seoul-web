<?php

/* ARC2 static class inclusion */ 
include_once('/arc2/ARC2.php');

/* MySQL and endpoint configuration */ 
$config = array(
  /* db */
  'db_host' => 'localhost', /* optional, default is localhost */
  'db_name' => '',
  'db_user' => '',
  'db_pwd' => '',

  /* store name */
  'store_name' => 'cf',

  /* endpoint */
  'endpoint_features' => array(
    'select', 'construct', 'ask', 'describe', 
    'load', 'insert', 'delete', 
    'dump' /* dump is a special command for streaming SPOG export */
  ),
  'endpoint_timeout' => 600, /* not implemented in ARC2 preview */
  'endpoint_read_key' => '', /* optional */
  'endpoint_write_key' => 'REPLACE_THIS_WITH_SOME_KEY', /* optional, but without one, everyone can write! */
  'endpoint_max_limit' => 500000, /* optional */
);

/* instantiation */
$ep = ARC2::getStoreEndpoint($config);

if (!$ep->isSetUp()) {
  $ep->setUp(); /* create MySQL tables */
}

/* request handling */
$ep->go();
/*
$ep->handleRequest();
$ep->sendHeaders();
echo $ep->getResult();
*/
?>