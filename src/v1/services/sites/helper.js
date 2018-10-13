import Sites from './model';

export const create = (body) => new Sites(body).save();
export const find = (body) => Sites.find(body).exec();
export const findOne = (_id) => Sites.findOne(_id);