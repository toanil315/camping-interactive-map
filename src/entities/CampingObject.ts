import { CAMPING_OBJECT_ENUM } from '@/constants/camping-object';
import { z } from 'zod';

export const CampingObjectSchema = z.object({
  id: z.string().optional(),
  type: z.nativeEnum(CAMPING_OBJECT_ENUM, {
    required_error: 'this field is required',
  }),
  top: z.number().min(0).max(100),
  left: z.number().min(0).max(100),
});

export type CampingObject = z.infer<typeof CampingObjectSchema>;
