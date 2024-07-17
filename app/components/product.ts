import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import type PaymentMethodModel from 'ember-data-issues/models/payment-method';
import type PaymentMethodCcModel from 'ember-data-issues/models/payment-method-cc';
import type Store from 'ember-data-issues/services/store';

export default class ProductComponent extends Component {
  @service
  declare store: Store;

  private purchase(paymentMethod: PaymentMethodModel): void {
    console.log(paymentMethod.id);
  }

  @action
  async purchaseCc(paymentMethodCcId: string): Promise<void> {
    // Is there a plan to make specifying 'T' optional?
    const paymentMethodCc = await this.store.findRecord<PaymentMethodCcModel>(
      'payment-method-cc',
      paymentMethodCcId,
    );
    // Descendants of 'Model' cannot be upcast because of 'eachRelationship' and 'eachAttribute'
    this.purchase(paymentMethodCc as unknown as PaymentMethodModel);
  }
}
