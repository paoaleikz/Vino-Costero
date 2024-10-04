import { Injectable } from '@angular/core';
import { ROLES } from '../../mocksData/mock-users';

@Injectable({
  providedIn: 'root'
})
export class RoleManagementService {

  getRoles() {
    return ROLES;
  }

  getPermissions(role: string): string[] {
    const roleData = ROLES.find(r => r.role === role);
    return roleData ? roleData.permissions : [];
  }
}
