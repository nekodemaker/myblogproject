<?php

namespace Model;

class CommentManager
{
    private $DBManager;
    
    private static $instance = null;
    public static function getInstance()
    {
        if (self::$instance === null)
            self::$instance = new CommentManager();
        return self::$instance;
    }
    
    private function __construct()
    {
        $this->DBManager = DBManager::getInstance();
    }
    public function createCommentCheck($data)
    {
        return  !(empty($data['text-comment']));
    }
    
    public function createComment($data)
    {
        $query="insert into `comments`(`author_comment`,`date_comment`,`id_article`,`text_comment`)values(:author,NOW(),:id_art,:text)";
        $d=([
        'author'=> $data['author-comment'],
        'id_art'=> $data['id-article'],
        'text'=> $data['text-comment'],
        ]);
        $this->DBManager->do_query_db($query,$d);
    }
    
    public function getAllComments(){
        $data = $this->DBManager->findAll("SELECT count* FROM comments");
        return $data;
    }
    
    public function commentCheck($id_comment)
    {
        $data = $this->DBManager->findOneSecure("SELECT * FROM comments WHERE id = :id",
        ['id' => $id_comment]);
        if(count($data['id'])!=0){
            return true;
        }else{
            return false;
        }
        
    }
    
}