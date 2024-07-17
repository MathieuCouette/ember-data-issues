import { attr } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';
import PaymentMethodModel from './payment-method';
import type StringTransform from 'ember-data-issues/transforms/string';

export default class PaymentMethodCcModel extends PaymentMethodModel {
  declare [Type]: 'payment-method-cc';

  @attr<StringTransform>('string')
  declare last4: string;

  get obfuscatedIdentifier() {
    return `**** **** **** ${this.last4}`;
  }
}
