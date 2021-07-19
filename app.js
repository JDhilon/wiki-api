//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);

// Chaining request for /articles route
// ------------------ REQUESTS TARGETTING ALL ARTICLES ---------------
app.route("/articles")
    .get(function(req, res){
        Article.find({}, function(err, results){
            if(err){
                res.send(err);
            } else {
                res.send(results);
            }
        });
    })
    .post(function(req, res){
        const article = new Article({
            title: req.body.title,
            content: req.body.content
        });
        article.save(function(err){
            if(err){
                res.send(err);
            } else {
                res.send("Successfully added a new article");
            }
        });
        
    })
    .delete(function(req, res){
        Article.deleteMany({}, function(err){
            if(err){
                res.send(err);
            } else {
                res.send("Successfully deleted all articles.")
            }
        });
    });

// Chaining request for /articles/:articleTitle route
// ------------------ REQUESTS TARGETTING SPECIFIC ARTICLES ---------------
app.route("/articles/:articleTitle")
    .get(function(req, res){
        Article.findOne({title: req.params.articleTitle}, function(err, result){
            if(result) {
                res.send(result);
            } else {
                if(err) {
                    res.send(err);
                }
                else {
                    res.send("No article found.");
                }
            }
        });
    })
    .put(function(req, res){
        Article.replaceOne(
            {title: req.params.articleTitle}, 
            {title: req.body.title, content: req.body.content},
            function(err, results){
                if(err){
                    res.send(err);
                } else {
                    res.send("Successfully updated article.");
                }
        });
    })
    .patch(function(req, res){
        Article.updateOne(
            {title: req.params.articleTitle}, 
            {$set: req.body},
            function(err, result){
                if(err){
                    res.send(err);
                } else {
                    res.send("Successfully updated article.");
                }
        });
    })
    .delete(function(req, res){
        Article.deleteOne({title: req.params.articleTitle}, function(err) {
            if(err){
                res.send(err);
            } else {
                res.send("Successfully deleted article.");
            }
        });
    });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
