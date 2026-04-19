import { routes } from './app.routes';
import { authGuard } from './guards/auth.guard';

describe('App routes', () => {
  it('should define login, register and protected dashboard routes', () => {
    const loginRoute = routes.find(route => route.path === 'login');
    const registerRoute = routes.find(route => route.path === 'register');
    const dashboardRoute = routes.find(route => route.path === 'dashboard');

    expect(loginRoute).toBeTruthy();
    expect(registerRoute).toBeTruthy();
    expect(dashboardRoute).toBeTruthy();
    expect(dashboardRoute?.canActivate).toContain(authGuard);
  });

  it('should redirect root path to login', () => {
    const rootRoute = routes.find(route => route.path === '');
    expect(rootRoute?.redirectTo).toBe('login');
  });
});
