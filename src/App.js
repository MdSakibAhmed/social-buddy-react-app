import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Posts from './components/allPosts/AllPosts';
import Post from './components/Post/Post';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <Router>
      <Route exact path="/">
      <Home></Home>

      </Route>
      
      <Route path="/post/:postId/comments">

      <Post></Post>

      </Route>

      <Route path="*">


      </Route>
    </Router>

  )
   
  ;
}

export default App;
