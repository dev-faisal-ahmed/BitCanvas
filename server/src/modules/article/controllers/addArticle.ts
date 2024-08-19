import { Article } from '../model';
import { AppError } from '../../../utils';
import { catchAsync } from '../../../middleware';
import { addArticleSchema } from '../validation';
import { sendSuccessResponse } from '../../../helpers';

export const addArticle = catchAsync(async (req, res) => {
  // validation
  const payload = await addArticleSchema.parseAsync(req.body);
  const { _id } = req.user;

  const article = await Article.create({ ...payload, authorId: _id });
  if (!article) throw new AppError('Failed to create article', 400);

  return sendSuccessResponse(res, {
    status: 200,
    message: 'Article was created successfully',
    data: article,
  });
});
