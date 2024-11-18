import { useGetManyServerlessFunctions } from '@/settings/serverless-functions/hooks/useGetManyServerlessFunctions';
import { WorkflowEditActionFormServerlessFunctionInner } from '@/workflow/components/WorkflowEditActionFormServerlessFunctionInner';
import { WorkflowCodeStep } from '@/workflow/types/Workflow';
import { isDefined } from 'twenty-ui';

type WorkflowEditActionFormServerlessFunctionProps =
  | {
      action: WorkflowCodeStep;
      readonly: true;
    }
  | {
      action: WorkflowCodeStep;
      readonly?: false;
      onActionUpdate: (action: WorkflowCodeStep) => void;
    };

export const WorkflowEditActionFormServerlessFunction = (
  props: WorkflowEditActionFormServerlessFunctionProps,
) => {
  const { serverlessFunctions } = useGetManyServerlessFunctions();

  const selectedServerlessFunction = serverlessFunctions.find(
    (fn) => fn.id === props.action.settings.input.serverlessFunctionId,
  );

  if (!isDefined(selectedServerlessFunction)) {
    return <div>Could not find the related serverless function.</div>;
  }

  return (
    <WorkflowEditActionFormServerlessFunctionInner
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      selectedServerlessFunction={selectedServerlessFunction}
    />
  );
};
