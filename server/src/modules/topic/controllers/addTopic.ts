import { sendSuccessResponse } from '../../../helpers';
import { catchAsync } from '../../../middleware';
import { Topic } from '../model';
import { addTopicSchema } from '../validation';

export const addTopic = catchAsync(async (req, res) => {
  // validation
  const payload = await addTopicSchema.parseAsync(req.body);
  const user = req.user;

  const topic = await Topic.create({ ...payload, createdBy: user._id });

  // sending response
  return sendSuccessResponse(res, {
    status: 200,
    message: 'Topic created successfully',
    data: topic,
  });
});
