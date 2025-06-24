import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);

  // Garante que o código só rode no navegador, onde o localStorage existe.
  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem('token');

    if (token) {
      return true; // Token existe, acesso permitido!
    }
  }

  // Se não estiver no navegador ou não tiver token, redireciona para o login.
  router.navigate(['/login']);
  return false;
};
