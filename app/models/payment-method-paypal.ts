import { attr } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';
import PaymentMethodModel from './payment-method';
import type StringTransform from 'ember-data-issues/transforms/string';

export default class PaymentMethodPaypalModel extends PaymentMethodModel {
  declare [Type]: 'payment-method-paypal';

  @attr<StringTransform>('string')
  declare linkedEmail: string;

  get obfuscatedIdentifier() {
    const last5 = this.linkedEmail
      .split('')
      .reverse()
      .slice(0, 5)
      .reverse()
      .join('');

    return `••••${last5}`;
  }
}
