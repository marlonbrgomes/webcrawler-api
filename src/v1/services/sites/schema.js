import { Joi } from 'celebrate';

const site = {
  name: Joi.string().required(),
  image: Joi.string(),
  url: Joi.string().required()
}

export const create = {
  body: Joi.object().keys(site)
};

export const find = {
  body: Joi.object().keys({
    _id: Joi.string()
  })
};