import Card from '../../shared/components/UIElements/Card';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import { useBlogs } from '../../shared/hooks/blog-hook';

const WorkCard = () => {
  const { works } = useBlogs();
  const workFiles = !works && <LoadingSpinner />;
  works &&
    works.map((file) => {
      return (
        <Card key={file._id} className="mapped">
          <h2>{file.title}</h2>
          <h4>{file.description}</h4>
        </Card>
      );
    });

  return workFiles;
};

export default WorkCard;
