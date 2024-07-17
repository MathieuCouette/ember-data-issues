import Model, { belongsTo } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';
import type UserModel from './user';

export default class PaymentMethodModel extends Model {
  // Is this the correct way to brand polymorphic models?
  declare [Type]:
    | 'payment-method'
    | 'payment-method-cc'
    | 'payment-method-paypal';

  @belongsTo<UserModel>('user', { async: false, inverse: 'paymentMethods' })
  declare user: UserModel;
}
