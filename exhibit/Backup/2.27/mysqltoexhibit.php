<?php
 /*
 * Script:    Exhibit JSON server-side script for PHP and MySQL
 */

 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Easy set variables
 */

 /* Database connection information */
 $gaSql['user']       = "root";
 $gaSql['password']   = "1q2w3e4r";
 $gaSql['db']         = "TheSeoul";
 $gaSql['server']     = "168.219.198.45:3306"; 

 /* DB table to use */
 $sTable = "chatable_wholearea";

 /* Indexed column (Primary Key column or similar) */
 $sIndexColumn = "FAC_CODE";

 /* Array of database columns which should be read and sent back to Exhibit in JSON form. */
// $aColumns = array( 'Column1_label', 'Column2', 'Column3', 'Column4');
 $aColumns = array( 'id', 'category', 'category_eng', 'kor_name', 'class1', 'class2', 'class3', 'class4', 'address_cls1');

 /* Exhibit requires that each item have a "label" and/or an "id" field.
 * Set the below variables to identify which columns are your "label" and/or "id" fields
 * (or leave them blank if your columns are named correctly)
 */
 $item_id = '';
 $item_label = 'FAC_CODE';

 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * No need it edit below this line 
 */

 /*
 * MySQL connection
 */

 $gaSql['link'] =  mysql_pconnect( $gaSql['server'], $gaSql['user'], $gaSql['password']  ) or
 die( 'Could not open connection to server' );
 mysql_query("SET SESSION character_set_results = 'UTF8'");
 mysql_select_db( $gaSql['db'], $gaSql['link'] ) or
 die( 'Could not select database '. $gaSql['db'] );

 /*
 * SQL queries
 * Get data to display
 */
 $sQuery = "
 SELECT SQL_CALC_FOUND_ROWS ".str_replace(" , ", " ", implode(", ", $aColumns))."
 FROM   $sTable
 ";
 $rResult = mysql_query( $sQuery, $gaSql['link'] ) or die(mysql_error());

 /* Data set length after filtering */
 $sQuery = "
 SELECT FOUND_ROWS()
 ";
 $rResultFilterTotal = mysql_query( $sQuery, $gaSql['link'] ) or die(mysql_error());
 $aResultFilterTotal = mysql_fetch_array($rResultFilterTotal);
 $iFilteredTotal = $aResultFilterTotal[0];

 /* Total data set length */
 $sQuery = "
 SELECT COUNT(".$sIndexColumn.")
 FROM   $sTable
 ";

 /*
 * Output
 */

 $output = array(
	 "items" => array()
 );

 while ( $aRow = mysql_fetch_array( $rResult ) )
 {
	 $row = array();
	 for ( $i=0 ; $i<count($aColumns) ; $i++ )
	 {
		 if ( $aColumns[$i] == $item_label )
		 {
			 $row["label"] = $aRow[ $aColumns[$i] ];
		 }
		 else if ( $aColumns[$i] == $item_id )
		 {
			 $row["id"] = $aRow[ $aColumns[$i] ];
		 }
		 else
		 {
			 $row[$aColumns[$i]] = $aRow[ $aColumns[$i] ];
		 }
	 }
	 $output['items'][] = $row;
 }

 echo json_encode( $output );
?>