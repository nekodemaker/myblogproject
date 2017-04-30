<?php

namespace Controller;

use Model\CommentManager;

class CommentController extends BaseController
{
    
    public function createCommentAction()
    {
        $error = '';
        if(!empty($_SESSION['user_id'])){
            if ($_SERVER['REQUEST_METHOD'] === 'POST')
            {
                $manager = CommentManager::getInstance();
                if ($manager->createCommentCheck($_POST))
                {
                    $manager->createComment($_POST);
                    //$this->redirect('home');
               }
               else {
                   $error = "One of things is empty";
                }
            }
            echo $this->renderView('article.html.twig', ['error' => $error,'name' => $_SESSION['username']]);
        }else{
            $this->redirect('home');
        }
    }

    public function deleteCommentAction()
    {
        $error = '';
        if(!empty($_SESSION['user_id'])){
            if ($_SERVER['REQUEST_METHOD'] === 'POST')
            {
                $manager = CommentManager::getInstance();
                if ($manager->commentCheck($_POST))
                {
                    $manager->deleteComment($_POST);
                    //$this->redirect('home');
               }
               else {
                   $error = "One of things is empty";
                }
            }
            echo $this->renderView('article.html.twig', ['error' => $error,'name' => $_SESSION['username']]);
        }else{
            $this->redirect('home');
        }
    }

}