<?php

namespace Model;

class ArticleManager
{
    private $DBManager;
    
    private static $instance = null;
    public static function getInstance()
    {
        if (self::$instance === null)
            self::$instance = new ArticleManager();
        return self::$instance;
    }
    
    private function __construct()
    {
        $this->DBManager = DBManager::getInstance();
    }
    public function createArticleCheck($data)
    {
        return  !(empty($data['title-article']) OR empty($data['text-article']));
    }
    
    public function createArticle($data)
    {
        $query="insert into `articles`(`title_article`,`author_article`,`date_article`,`text_article`)values(:title,:author,NOW(),:text)";
        $d=([
        'title'=> $data['title-article'],
        'author'=> $_SESSION['username'],
        'text'=> $data['text-article'],
        ]);
        $this->DBManager->do_query_db($query,$d);
    }
}