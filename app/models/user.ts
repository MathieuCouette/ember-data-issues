import Model, { hasMany, type HasMany } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';
import type PaymentMethodModel from './payment-method';

export default class UserModel extends Model {
  declare [Type]: 'user';

  @hasMany<PaymentMethodModel>('payment-method', {
    async: false,
    inverse: 'user',
    polymorphic: true,
  })
  declare paymentMethods: HasMany<PaymentMethodModel>;
}
