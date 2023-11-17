import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home';

export const RouterInfo = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      // 라우팅 처리는 여기서 관리
      {
        index: true,
        element: <Home />,
        lebel: 'main'
      },
      {
        path: '/mypage',
        element: <div>마이페이지</div>
      }
    ]
  }
];
