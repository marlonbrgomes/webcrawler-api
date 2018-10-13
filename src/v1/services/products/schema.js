import { Joi } from 'celebrate';

const product = {
  name: Joi.string().required(),
  image: Joi.string(),
  url: Joi.string().required(),
  price: Joi.string().required(),
  siteName: Joi.string().required(),
  siteId: Joi.string().required(),
  siteUrl: Joi.string().required()
}

export const create = {
  body: Joi.object().keys(product)
};

export const find = {
  body: Joi.object().keys({
    _id: Joi.string()
  })
};