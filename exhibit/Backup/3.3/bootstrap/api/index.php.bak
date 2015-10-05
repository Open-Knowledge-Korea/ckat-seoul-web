<?php

require 'Slim/Slim.php';

$app = new Slim();

$app->get('/wines', 'getWines');
$app->get('/wines/:id',	'getWine');
$app->get('/wines/search/:query', 'findByName');
$app->post('/wines', 'addWine');
$app->put('/wines/:id', 'updateWine');
$app->delete('/wines/:id',	'deleteWine');

$app->get('/datasets', 'getTables');
$app->get('/datasets/:name', 'getDataList');
$app->get('/datasets/:name/info', 'getDataInfo');
$app->get('/datasets/:name/:id', 'getData');
$app->post('/datasets/:name/:id', 'updateData');

$app->run();

function getTables() {
	$sql = "show tables";
	
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$tables = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		
		echo json_encode($tables);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function getDataList($name) {
	$sql = "select * from ". $name;
	
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$tables = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		
		echo json_encode($tables);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function getDataInfo($name) {
	$sql = "show columns from ". $name;
	
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$tables = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		
		echo json_encode($tables);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function getData($name, $id) {
	$sql = "select * from ". $name ." where id = ". $id;
	
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$tables = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		
		echo json_encode($tables);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function updateData() {
	$request = Slim::getInstance()->request();
	$wine = json_decode($request->getBody());
	$sql = "INSERT INTO wine (name, grapes, country, region, year, description, picture) VALUES (:name, :grapes, :country, :region, :year, :description, :picture)";
	try {
	/*	$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("name", $wine->name);
		$stmt->bindParam("grapes", $wine->grapes);
		$stmt->bindParam("country", $wine->country);
		$stmt->bindParam("region", $wine->region);
		$stmt->bindParam("year", $wine->year);
		$stmt->bindParam("description", $wine->description);
		$stmt->bindParam("picture", $wine->picture);
		$stmt->execute();
		$wine->id = $db->lastInsertId();
		$db = null;*/
		echo $request->getBody(); 
	} catch(PDOException $e) {
		error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getWines() {
	$sql = "select * FROM wine ORDER BY name";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);  
		$wines = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		// echo '{"wine": ' . json_encode($wines) . '}';
		echo json_encode($wines);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getWine($id) {
	$sql = "SELECT * FROM wine WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$wine = $stmt->fetchObject();  
		$db = null;
		echo json_encode($wine); 
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function addWine() {
	error_log('addWine\n', 3, '/var/tmp/php.log');
	$request = Slim::getInstance()->request();
	$wine = json_decode($request->getBody());
	$sql = "INSERT INTO wine (name, grapes, country, region, year, description, picture) VALUES (:name, :grapes, :country, :region, :year, :description, :picture)";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("name", $wine->name);
		$stmt->bindParam("grapes", $wine->grapes);
		$stmt->bindParam("country", $wine->country);
		$stmt->bindParam("region", $wine->region);
		$stmt->bindParam("year", $wine->year);
		$stmt->bindParam("description", $wine->description);
		$stmt->bindParam("picture", $wine->picture);
		$stmt->execute();
		$wine->id = $db->lastInsertId();
		$db = null;
		echo json_encode($wine); 
	} catch(PDOException $e) {
		error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function updateWine($id) {
	$request = Slim::getInstance()->request();
	$body = $request->getBody();
	$wine = json_decode($body);
	$sql = "UPDATE wine SET name=:name, grapes=:grapes, country=:country, region=:region, year=:year, description=:description, picture=:picture WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("name", $wine->name);
		$stmt->bindParam("grapes", $wine->grapes);
		$stmt->bindParam("country", $wine->country);
		$stmt->bindParam("region", $wine->region);
		$stmt->bindParam("year", $wine->year);
		$stmt->bindParam("description", $wine->description);
		$stmt->bindParam("picture", $wine->picture);
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
		echo json_encode($wine); 
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function deleteWine($id) {
	$sql = "DELETE FROM wine WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function findByName($query) {
	$sql = "SELECT * FROM wine WHERE UPPER(name) LIKE :query ORDER BY name";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$query = "%".$query."%";  
		$stmt->bindParam("query", $query);
		$stmt->execute();
		$wines = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($wines);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getConnection() {
	$dbhost="localhost";
	$dbuser="root";
	$dbpass="datahub1129";
	$dbname="TheSeoul";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}

?>