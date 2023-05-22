export { default } from "./LazyMotion"
import { MotionLazyContainer } from "../../components/animate"
function LazyMotion({ children }) {
	return <MotionLazyContainer>{children}</MotionLazyContainer>
}
