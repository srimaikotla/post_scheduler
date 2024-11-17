import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterError from './Header/RouterError';
import Login from './Header/Login';
import SignUp from './Header/SignUp';
import Profile from './Header/Profile';
import RoutLayout from './Header/RoutLayout';
import Home from './Header/Home';
import Facebook from './SocialMedias/Facebook';
import Instagram from './SocialMedias/Instagram';
import Twitter from './SocialMedias/Twitter';
import Linkedin from './SocialMedias/Linkedin';
import Allchannels from './SocialMedias/Allchannels';
import Content from './SocialMedias/content';

// Create Browser Router
const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RoutLayout />,
    errorElement: <RouterError />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [
          { path: '', element: <Allchannels /> },
          { path: 'facebook', element: <Facebook /> },
          { path: 'instagram', element: <Instagram /> },
          { path: 'linkedin', element: <Linkedin /> },
          { path: 'twitter', element: <Twitter /> },
          { path: 'allcontent',element:<Allchannels/>},
          { path: 'content', element: <Content/> },
        ],
      },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

// App Component
function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
