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
    
}