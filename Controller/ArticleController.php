<?php

namespace Controller;

use Model\ArticleManager;

class ArticleController extends BaseController
{
    
    public function createArticleAction()
    {
        $error = '';
        if(!empty($_SESSION['user_id'])){
            if ($_SERVER['REQUEST_METHOD'] === 'POST')
            {
                $manager = ArticleManager::getInstance();
                if ($manager->createArticleCheck($_POST))
                {
                    $manager->createArticle($_POST);
                    $this->redirect('home');
                }
                else {
                    $error = "One of things is empty";
                }
            }
            echo $this->renderView('article_create.html.twig', ['error' => $error]);
        }else{
            $this->redirect('home');
        }
    }
    
    public function showArticleAction()
    {
        $error = '';
        if ($_SERVER['REQUEST_METHOD'] === 'GET')
        {
            $manager = ArticleManager::getInstance();
            if ($manager->articleCheck($_GET['id_article']))
            {
                $articleToShow=$manager->getArticle($_GET['id_article']);
                echo $this->renderView('article.html.twig', ['articleToShow' => $articleToShow]);
                //$this->redirect('home');
            }
            else {
                $error = "That article doesn't exist";
            }
        }else{
            $error = "Not POST";
        }
        echo $this->renderView('article.html.twig', ['error' => $error]);
    }
}