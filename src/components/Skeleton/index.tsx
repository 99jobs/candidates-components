import SkeletonComponent, { SkeletonProps } from 'react-loading-skeleton'
import style from './Skeleton.module.css'

export const Skeleton = ({ ...props }: SkeletonProps) => (
  <SkeletonComponent {...props} className={style['react-loading-skeleton']} />
)
