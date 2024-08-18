import { sendSuccessResponse } from '../../../helpers';
import { catchAsync } from '../../../middleware';
import { Topic } from '../model';

export const getAllTopics = catchAsync(async (_, res) => {
  const topics = await Topic.find({ isDeleted: false });

  // sending responses
  return sendSuccessResponse(res, {
    status: 200,
    message: 'Topics retrieved successfully',
    data: topics,
  });
});
