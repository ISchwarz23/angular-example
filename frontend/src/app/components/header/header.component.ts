import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAccount } from '../../models/api-response.model';
import { TodoStore } from '../../state/todo.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public account$: Observable<UserAccount | null>;

  constructor(
    private store: TodoStore,
  ) {
    this.account$ = this.store.onChanges('account');
  }

  public async clearLogin(): Promise<void> {
    await this.store.logout();
  }
}
