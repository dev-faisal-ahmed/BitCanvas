import { Article } from '../model';
import { AppError } from '../../../utils';
import { catchAsync } from '../../../middleware';
import { updateArticleSchema } from '../validation';
import { sendSuccessResponse } from '../../../helpers';

export const updateArticle = catchAsync(async (req, res) => {
  // validations
  const payload = await updateArticleSchema.parseAsync(req.body);
  const { articleId } = req.params;
  const { _id } = req.user;

  const article = await Article.findOneAndUpdate(
    { _id: articleId, authorId: _id },
    { $set: payload }
  );

  if (!article) throw new AppError('Failed to update article', 400);

  // sending response
  return sendSuccessResponse(res, {
    status: 200,
    message: 'Article Updated Successfully',
    data: article,
  });
});
