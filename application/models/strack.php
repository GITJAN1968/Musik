<?php

/**
 * The Stores the info about the tracks saved by user
 *
 * @author Hemant Mann
 */
class Strack extends Shared\Model {

    /**
     * @column
     * @readwrite
     * @type text
     * @length 255
     */
    protected $_track

    /**
     * @column
     * @readwrite
     * @type text
     * @length 255
     * @index
     */
    protected $_artist;

    /**
     * @column
     * @readwrite
     * @type text
     * @length 255
     * @index
     */
    protected $_mbid;
    
    /**
    * @column
    * @readwrite
    * @type text
    * @length 255
    * @index
    */
    protected $_yid;
}
