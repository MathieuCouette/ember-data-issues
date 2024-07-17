import Model, { attr, hasMany, type HasMany } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';
import type PaymentMethodModel from './payment-method';
import type BooleanTransform from 'ember-data-issues/transforms/boolean';

export default class UserModel extends Model {
  declare [Type]: 'user';

  @hasMany<PaymentMethodModel>('payment-method', {
    async: false,
    inverse: 'user',
    polymorphic: true,
  })
  declare paymentMethods: HasMany<PaymentMethodModel>;

  // 'options' is 'undefined' because 'BooleanTransform' fails to extend
  // 'TypedTransformInstance'
  @attr<BooleanTransform>('boolean', { allowNull: true })
  declare default: boolean | null;
}
